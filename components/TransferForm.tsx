"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Loader2, ArrowRight, Landmark, WalletCards, BadgeInfo, Banknote,
  Building, User, CreditCard,
  Globe,
  DollarSign,
} from "lucide-react";

import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "./ui/select";

import { BankAccount, AccountType } from "@/types";
import CustomFormField from "./CustomFormField";


export enum FormFieldType {
  INPUT = 'input',
  PHONE_INPUT = 'phoneInput',
  SKELETON = 'skeleton',
  CHECKBOX = 'checkbox'
}


const formSchema = z.object({
  amount: z.number().min(1, "Amount must be at least $1").max(20000000000000, "Maximum transfer is Unlimited"),
  recipientAddress: z.string().max(70, "Address too long"),
  bankName: z.string().max(50, "Bank name too long"),
  bankAddress: z.string().max(140, "Bank address too long"),
  recipientName: z.string().min(2, "Recipient name is required"),
  accountNumber: z.string().length(13, "Must be a valid 13-digit account number"),
  routingNumber: z.string().length(9, "Must be a valid 9-digit routing number"),
  swiftCode: z.string().max(8, "Swift Code too long").optional(),
  phoneNumber: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  note: z.string().max(140, "Note too long").optional(),
  saveBeneficiary: z.boolean(),
  accountType: z.string().min(1, "Account type is required"),
});

interface PaymentTransferFormProps {
  type: "domestic" | "wire";
  accounts?: BankAccount[];
}

const TransferForm = ({ type, accounts }: PaymentTransferFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: undefined,
      recipientAddress: "",
      bankName: "",
      bankAddress: "",
      recipientName: "",
      accountNumber: "",
      routingNumber: "",
      swiftCode: "",
      phoneNumber: "",
      note: "",
      saveBeneficiary: false,
      accountType: "",
    },
  });

  const accountTypes: AccountType[] = [
    { value: "checking", label: "Checking Account", icon: <WalletCards className="w-4 h-4" /> },
    { value: "savings", label: "Savings Account", icon: <Banknote className="w-4 h-4" /> },
    { value: "business", label: "Business Account", icon: <Building className="w-4 h-4" /> },
    { value: "joint", label: "Joint Account", icon: <User className="w-4 h-4" /> },
    { value: "current", label: "Current Account", icon: <CreditCard className="w-4 h-4" /> },
    { value: "non-residential", label: "Non-Residential Account", icon: <Globe className="w-4 h-4" /> },
    { value: "domiciliary", label: "Domiciliary Account", icon: <DollarSign className="w-4 h-4" /> },
  ];


  const submit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    // Simulate API call
    // const promise = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({ success: true });
    //   }, 2000);
    // });

    // Simulate API call that always fails
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Transfer failed"));
      }, 2000);
    });

    toast.promise(promise, {
      loading: 'Processing transfer...',
      success: () => {
        // This won't be called since we're rejecting the promise
        setIsLoading(false);
        return `Transfer successful`;
      },
      error: () => {
        setIsLoading(false);
        alert("Temporal Hold On Account By CRA Due To Unpaid Taxes Withheld.");
        return `Transfer of $${data.amount} to ${data.recipientName} failed`;
      },
    });
  };

  return (
    <Card className="w-full max-w-4xl lg:w-2/3 mx-auto px-4">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Landmark className="w-6 h-6 text-primary" />
          {type === "wire" ? "Wire Transfer" : "Domestic Transfer"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="space-y-6">
            {/* Amount */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <WalletCards className="w-4 h-4" />
                    Transfer Amount
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <Input
                        className="pl-8 text-sm lg:text-base font-normal"
                        type="number"
                        step="0.01"
                        {...field}
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Recipient Info */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <BadgeInfo className="w-4 h-4" />
                <span className="text-sm">Recipient Information</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="recipientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Beneficiary Account Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="recipientAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              {type === "wire" && (
                <CustomFormField
                  fieldType={FormFieldType.PHONE_INPUT}
                  control={form.control}
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder=""
                />
              )}

            </div>

            </div>

            {/* Bank Info */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Landmark className="w-4 h-4" />
                <span className="text-sm">Bank Account Details</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="bankName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bank Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={form.control}
                  name="bankAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bank Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                <FormField
                  control={form.control}
                  name="accountNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Beneficiary Account Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="routingNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Routing Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="accountType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select account type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {accountTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              <div className="flex items-center gap-3">
                                {type.icon}
                                {type.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {type === "wire" && (
                  <FormField
                    control={form.control}
                    name="swiftCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Swift Code</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>

            {/* Note and Save */}
            <div className="space-y-4 border-t pt-6">
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transfer Note</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add a message to the recipient"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="saveBeneficiary"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3 space-y-0">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Save as Beneficiary</FormLabel>
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <Button
                type="submit"
                className="w-full gap-2"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing Transfer...
                  </>
                ) : (
                  <>
                    Confirm Transfer
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TransferForm;
