// src/components/DepositPage.jsx
'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import {
    CreditCard,
    Camera,
    Upload,
    CheckCircle,
    RefreshCw,
    AlertCircle,
    InfoIcon,
    Clock,
    ArrowUpCircle,
    Landmark,
    SmartphoneIcon
} from 'lucide-react';
import Image from 'next/image';

export default function DepositPage() {
    const [depositType, setDepositType] = useState('instant');
    const [destinationAccount, setDestinationAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [saveCard, setSaveCard] = useState(false);
    const [transferFrom, setTransferFrom] = useState('');
    const [routingNumber, setRoutingNumber] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [files, setFiles] = useState([]);
    const [recentDeposits, setRecentDeposits] = useState([
        { id: 1, type: 'Card', amount: 2500, date: '2025-04-09', status: 'completed' },
        { id: 2, type: 'Bank Transfer', amount: 1200, date: '2025-04-05', status: 'completed' },
        { id: 3, type: 'Check', amount: 850, date: '2025-03-28', status: 'completed' }
    ]);

    const accounts = [
        { id: 'savings', name: 'Savings Account', balance: 12450.75 },
        { id: 'checking', name: 'Checking Account', balance: 5680.32 },
        { id: 'investment', name: 'Investment Account', balance: 34200.18 }
    ];

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.jpeg', '.png', '.jpg']
        },
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    // Camera reference for mobile check deposit
    const videoRef = useRef(null);
    const [cameraActive, setCameraActive] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);


    const handleStartCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setCameraActive(true);
            }
        } catch (err) {
            console.error("Error accessing camera:", err);
            alert("Could not access your camera. Please check permissions.");
        }
    };

    const handleCaptureImage = () => {
        if (videoRef.current) {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/jpeg');
            setCapturedImage(dataUrl);
            stopCamera();
        }
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            setCameraActive(false);
        }
    };

    const resetCapture = () => {
        setCapturedImage(null);
        setFiles([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            setProgress(progress);

            if (progress >= 100) {
                clearInterval(interval);
                setIsProcessing(false);
                setIsSuccess(true);

                // Add to recent deposits
                const newDeposit = {
                    id: Date.now(),
                    type: depositType === 'instant' ? 'Card' : depositType === 'transfer' ? 'Bank Transfer' : 'Check',
                    amount: parseFloat(amount),
                    date: new Date().toISOString().split('T')[0],
                    status: 'completed'
                };

                setRecentDeposits([newDeposit, ...recentDeposits]);

                // Reset form after success
                setTimeout(() => {
                    setIsSuccess(false);
                    setAmount('');
                    setDestinationAccount('');
                    setCardNumber('');
                    setExpiryDate('');
                    setCvv('');
                    setNameOnCard('');
                    setSaveCard(false);
                    setTransferFrom('');
                    setRoutingNumber('');
                    setAccountNumber('');
                    setBankName('');
                    resetCapture();
                    setProgress(0);
                }, 3000);
            }
        }, 100);
    };

    // Format card number with spaces
    const formatCardNumber = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];

        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }

        if (parts.length) {
            return parts.join(' ');
        } else {
            return value;
        }
    };

    // Format expiry date
    const formatExpiryDate = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (v.length > 2) {
            return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
        }
        return v;
    };

    return (
        <div className="mt-20 mx-auto py-8 px-4 md:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=" max-w-3xl mx-auto"
            >
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Deposit Funds</h1>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                Recent Deposits
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Recent Deposits</SheetTitle>
                                <SheetDescription>
                                    View your recent deposit history
                                </SheetDescription>
                            </SheetHeader>
                            <ScrollArea className="h-[70vh] py-4">
                                <div className="space-y-4">
                                    {recentDeposits.map((deposit) => (
                                        <Card key={deposit.id} className="relative overflow-hidden">
                                            <div className={`absolute top-0 left-0 w-2 h-full ${deposit.status === 'completed' ? 'bg-green-500' :
                                                deposit.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                                                }`} />
                                            <CardContent className="p-4">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h3 className="font-medium">${deposit.amount.toLocaleString()}</h3>
                                                        <p className="text-sm text-gray-500">{deposit.type}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm">{new Date(deposit.date).toLocaleDateString()}</p>
                                                        <span className={`text-xs px-2 py-1 rounded-full ${deposit.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                            deposit.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                                                            }`}>
                                                            {deposit.status.charAt(0).toUpperCase() + deposit.status.slice(1)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </ScrollArea>
                        </SheetContent>
                    </Sheet>
                </div>

                <Card className="border-gray-200 shadow-lg overflow-hidden p-0">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
                        <CardTitle className="text-2xl font-bold flex items-center gap-2">
                            <ArrowUpCircle className="h-6 w-6" />
                            Deposit Funds
                        </CardTitle>
                        <CardDescription className="text-green-100">
                            Quickly and securely add money to your accounts
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-6">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-2">Deposit Successful!</h3>
                                <p className="text-gray-600 mb-6">
                                    Your deposit of ${parseFloat(amount).toLocaleString()} has been processed successfully.
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
                                                    View Receipt
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>View and download your deposit receipt</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <Button onClick={() => setIsSuccess(false)}>Make Another Deposit</Button>
                                </div>
                            </motion.div>
                        ) : isProcessing ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-8"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="inline-flex items-center justify-center w-12 h-12 mb-4"
                                >
                                    <RefreshCw className="w-8 h-8 text-green-600" />
                                </motion.div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4">Processing Your Deposit</h3>
                                <Progress value={progress} className="w-3/4 mx-auto mb-4" />
                                <p className="text-gray-600">Please wait while we process your request...</p>
                            </motion.div>
                        ) : (
                            <Tabs defaultValue="instant" className="w-full" onValueChange={setDepositType}>
                                <TabsList className="grid grid-cols-3 mb-6">
                                    <TabsTrigger value="instant" className="flex items-center gap-1">
                                        <CreditCard className="h-4 w-4" />
                                        <span className="hidden sm:inline">Card Deposit</span>
                                        <span className="sm:hidden">Card</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="transfer" className="flex items-center gap-1">
                                        <Landmark className="h-4 w-4" />
                                        <span className="hidden sm:inline">Bank Transfer</span>
                                        <span className="sm:hidden">Transfer</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="check" className="flex items-center gap-1">
                                        <Camera className="h-4 w-4" />
                                        <span className="hidden sm:inline">Check Deposit</span>
                                        <span className="sm:hidden">Check</span>
                                    </TabsTrigger>
                                </TabsList>

                                <form onSubmit={handleSubmit}>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="destination-account" className="font-medium">
                                                Deposit To
                                            </Label>
                                            <Select
                                                required
                                                value={destinationAccount}
                                                onValueChange={setDestinationAccount}
                                            >
                                                <SelectTrigger id="destination-account" className="w-full">
                                                    <SelectValue placeholder="Select an account" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {accounts.map(account => (
                                                        <SelectItem key={account.id} value={account.id}>
                                                            {account.name} - ${account.balance.toLocaleString()}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="amount" className="font-medium">
                                                Deposit Amount
                                            </Label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1.5 text-gray-500">$</span>
                                                <Input
                                                    id="amount"
                                                    type="number"
                                                    placeholder="0.00"
                                                    className="pl-8"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                    required
                                                    min="1"
                                                    step="0.01"
                                                />
                                            </div>
                                            <p className="text-xs text-gray-500 flex items-center gap-1">
                                                <InfoIcon className="h-3 w-3" />
                                                {depositType === 'instant' ? 'Instant deposits are available immediately' :
                                                    depositType === 'transfer' ? 'Bank transfers may take 1-3 business days' :
                                                        'Check deposits are typically processed within 24 hours'}
                                            </p>
                                        </div>

                                        <TabsContent value="instant" className="space-y-4 mt-2">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="card-number" className="font-medium">
                                                        Card Number
                                                    </Label>
                                                    <Input
                                                        id="card-number"
                                                        placeholder="4111 1111 1111 1111"
                                                        value={cardNumber}
                                                        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                                                        maxLength={19}
                                                        required
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="name-on-card" className="font-medium">
                                                        Name on Card
                                                    </Label>
                                                    <Input
                                                        id="name-on-card"
                                                        placeholder="John Doe"
                                                        value={nameOnCard}
                                                        onChange={(e) => setNameOnCard(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="expiry" className="font-medium">
                                                        Expiry Date
                                                    </Label>
                                                    <Input
                                                        id="expiry"
                                                        placeholder="MM/YY"
                                                        value={expiryDate}
                                                        onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                                                        maxLength={5}
                                                        required
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="cvv" className="font-medium">
                                                        CVV
                                                    </Label>
                                                    <Input
                                                        id="cvv"
                                                        type="password"
                                                        placeholder="123"
                                                        value={cvv}
                                                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                                                        maxLength={4}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-2 pt-2">
                                                <Switch
                                                    id="save-card"
                                                    checked={saveCard}
                                                    onCheckedChange={setSaveCard}
                                                />
                                                <Label htmlFor="save-card" className="cursor-pointer">
                                                    Save this card for future deposits
                                                </Label>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="transfer" className="space-y-4 mt-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="bank-name" className="font-medium">
                                                    Bank Name
                                                </Label>
                                                <Input
                                                    id="bank-name"
                                                    placeholder="Enter bank name"
                                                    value={bankName}
                                                    onChange={(e) => setBankName(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="routing-number" className="font-medium">
                                                        Routing Number
                                                    </Label>
                                                    <Input
                                                        id="routing-number"
                                                        placeholder="123456789"
                                                        value={routingNumber}
                                                        onChange={(e) => setRoutingNumber(e.target.value.replace(/\D/g, ''))}
                                                        maxLength={9}
                                                        required
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="account-number" className="font-medium">
                                                        Account Number
                                                    </Label>
                                                    <Input
                                                        id="account-number"
                                                        placeholder="987654321"
                                                        value={accountNumber}
                                                        onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ''))}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="transfer-from" className="font-medium">
                                                    Account Type
                                                </Label>
                                                <Select
                                                    required
                                                    value={transferFrom}
                                                    onValueChange={setTransferFrom}
                                                >
                                                    <SelectTrigger id="transfer-from" className="w-full">
                                                        <SelectValue placeholder="Select account type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="checking">Checking Account</SelectItem>
                                                        <SelectItem value="savings">Savings Account</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="p-4 bg-blue-50 rounded-md"
                                            >
                                                <p className="text-sm text-blue-800 flex items-start gap-2">
                                                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Bank transfers typically take 1-3 business days to process. For immediate
                                                        deposits, consider using card deposit instead.
                                                    </span>
                                                </p>
                                            </motion.div>
                                        </TabsContent>

                                        <TabsContent value="check" className="space-y-4 mt-2">
                                            <div className="text-center space-y-4 py-2">
                                                <AnimatePresence mode="wait">
                                                    {files.length > 0 ? (
                                                        <motion.div
                                                            key="uploaded"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            className="space-y-4"
                                                        >
                                                            <div className="relative mx-auto border border-gray-300 rounded-lg overflow-hidden max-w-md">
                                                                <Image
                                                                    src={files[0].preview}
                                                                    alt="Uploaded check"
                                                                    className="w-full h-auto"
                                                                    onLoad={() => { URL.revokeObjectURL(files[0].preview) }}
                                                                />
                                                                <Button
                                                                    type="button"
                                                                    variant="secondary"
                                                                    className="absolute bottom-2 right-2"
                                                                    onClick={resetCapture}
                                                                >
                                                                    Remove
                                                                </Button>
                                                            </div>
                                                            <p className="text-sm text-gray-600">
                                                                Image uploaded successfully. Please ensure the check details are clearly visible.
                                                            </p>
                                                        </motion.div>
                                                    ) : (
                                                        <motion.div
                                                            key="upload-options"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            className="space-y-6"
                                                        >
                                                            <motion.div
                                                                whileHover={{ scale: 1.02 }}
                                                                whileTap={{ scale: 0.98 }}
                                                                className="border border-gray-200 rounded-lg p-6 cursor-pointer bg-white hover:shadow-md transition-all duration-200"
                                                                {...getRootProps()}
                                                            >
                                                                <input {...getInputProps()} />
                                                                <div className="flex flex-col items-center text-center">
                                                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                                                        <Upload className="w-6 h-6 text-blue-600" />
                                                                    </div>
                                                                    <h3 className="font-medium mb-2">Upload Image</h3>
                                                                    <p className="text-sm text-gray-500">
                                                                        Select an existing image of your check from your device
                                                                    </p>
                                                                </div>
                                                            </motion.div>

                                                            <div className="p-4 bg-amber-50 rounded-md">
                                                                <p className="text-sm text-amber-800 flex items-start gap-2">
                                                                    <InfoIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                                                    <span>
                                                                        For best results, place your check on a dark, non-reflective surface in good lighting.
                                                                        Make sure all four corners are visible and the check details are legible.
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                            </div>
                                        </TabsContent>

                                        {!isProcessing && !isSuccess && (depositType !== 'check' || capturedImage || files.length > 0) && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="pt-4"
                                            >
                                                <Button
                                                    type="submit"
                                                    className="w-full"
                                                    disabled={
                                                        !amount ||
                                                        !destinationAccount ||
                                                        (depositType === 'instant' && (!cardNumber || !expiryDate || !cvv || !nameOnCard)) ||
                                                        (depositType === 'transfer' && (!routingNumber || !accountNumber || !bankName || !transferFrom)) ||
                                                        (depositType === 'check' && !capturedImage && files.length === 0)
                                                    }
                                                >
                                                    Deposit Funds
                                                    <ArrowUpCircle className="ml-2 h-4 w-4" />
                                                </Button>
                                            </motion.div>
                                        )}
                                    </div>
                                </form>
                            </Tabs>
                        )}
                    </CardContent>

                    {!isProcessing && !isSuccess && (
                        <CardFooter className="border-t p-4 bg-gray-50 justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                                <SmartphoneIcon className="h-4 w-4 mr-1" />
                                <span>Secure deposits on any device</span>
                            </div>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="link" size="sm" className="text-gray-500">
                                            <InfoIcon className="h-4 w-4 mr-1" />
                                            Deposit FAQ
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="max-w-xs">
                                            Card deposits are instant. Bank transfers take 1-3 business days.
                                            Check deposits are usually available within 24 hours.
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </CardFooter>
                    )}
                </Card>
            </motion.div>

            {/* Receipt Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Deposit Receipt</DialogTitle>
                        <DialogDescription>
                            Transaction details for your records
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <div className="space-y-4">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Receipt</h3>
                                <p className="text-gray-500 text-sm">Transaction ID: #{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</p>
                                <p className="text-gray-500 text-sm">{new Date().toLocaleString()}</p>
                            </div>

                            <div className="border-t border-b border-gray-200 py-4 space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Amount:</span>
                                    <span className="font-medium">${parseFloat(amount).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Account:</span>
                                    <span className="font-medium">
                                        {accounts.find(acc => acc.id === destinationAccount)?.name || 'Selected Account'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Method:</span>
                                    <span className="font-medium">
                                        {depositType === 'instant' ? 'Card Deposit' :
                                            depositType === 'transfer' ? 'Bank Transfer' : 'Check Deposit'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Status:</span>
                                    <span className="text-green-600 font-medium">Completed</span>
                                </div>
                            </div>

                            <div className="text-center pt-2">
                                <p className="text-sm text-gray-500 mb-2">Thank you for your deposit</p>
                                <div className="border border-gray-200 rounded-md p-2 inline-block">
                                    <svg className="w-24 h-24 mx-auto" viewBox="0 0 100 100">
                                        <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="black" strokeWidth="2" />
                                        <rect x="20" y="20" width="60" height="10" fill="black" />
                                        <rect x="20" y="40" width="60" height="10" fill="black" />
                                        <rect x="20" y="60" width="60" height="10" fill="black" />
                                        <rect x="20" y="80" width="20" height="2" fill="black" />
                                        <rect x="50" y="80" width="30" height="2" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DialogFooter className="flex sm:justify-between">
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Close</Button>
                        <Button>
                            Download PDF
                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}