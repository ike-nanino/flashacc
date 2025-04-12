"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ShoppingCart,
  Banknote,
  Wallet,
  CreditCard,
  PiggyBank,
  Plane,
  Home,
  Utensils,
  Bus,
  Heart,
  Gamepad2,
  Gift,
  Dumbbell,
  Car,
  GraduationCap,
  Phone,
  Film,
  Music2,
  Leaf,
  Building2,
} from "lucide-react";

export const categoryIcons: Record<string, React.ReactNode> = {
  "Shopping": <ShoppingCart className="w-5 h-5 text-muted-foreground" />,
  "Salary": <Banknote className="w-5 h-5 text-muted-foreground" />,
  "Transfer": <Wallet className="w-5 h-5 text-muted-foreground" />,
  "Credit Card": <CreditCard className="w-5 h-5 text-muted-foreground" />,
  "Savings": <PiggyBank className="w-5 h-5 text-muted-foreground" />,
  "Travel": <Plane className="w-5 h-5 text-muted-foreground" />,
  "Rent": <Home className="w-5 h-5 text-muted-foreground" />,
  "Food": <Utensils className="w-5 h-5 text-muted-foreground" />,
  "Transport": <Bus className="w-5 h-5 text-muted-foreground" />,
  "Health": <Heart className="w-5 h-5 text-muted-foreground" />,
  "Entertainment": <Gamepad2 className="w-5 h-5 text-muted-foreground" />,
  "Gifts": <Gift className="w-5 h-5 text-muted-foreground" />,
  "Fitness": <Dumbbell className="w-5 h-5 text-muted-foreground" />,
  "Car": <Car className="w-5 h-5 text-muted-foreground" />,
  "Education": <GraduationCap className="w-5 h-5 text-muted-foreground" />,
  "Phone": <Phone className="w-5 h-5 text-muted-foreground" />,
  "Movies": <Film className="w-5 h-5 text-muted-foreground" />,
  "Music": <Music2 className="w-5 h-5 text-muted-foreground" />,
  "Eco": <Leaf className="w-5 h-5 text-muted-foreground" />,
  "Bills": <Building2 className="w-5 h-5 text-muted-foreground" />,
};


const transactionsData = [
  // 30 sample transactions
  {
    id: 1,
    category: "Music",
    date: "2024-03-20",
    amount: "$15.00",
    icon: "/images/icons/music.png",
    card: "/images/visa.png",
    cardType: "Visa",
    cardDigits: "*1234",
    description: "Spotify Subscription",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 2,
    category: "Shopping",
    date: "2024-03-19",
    amount: "$120.00",
    icon: "/images/icons/shopping.png",
    card: "/images/mastercard.png",
    cardType: "Mastercard",
    cardDigits: "*5678",
    description: "Zara Purchase",
    status: "Pending",
    party: "Receiver",
  },
  {
    id: 4,
    category: "Groceries",
    date: "2024-03-17",
    amount: "$45.50",
    icon: "/images/icons/groceries.png",
    card: "/images/amex.png",
    cardType: "Amex",
    cardDigits: "*2345",
    description: "Walmart",
    status: "Completed",
    party: "Receiver",
  },
  {
    id: 5,
    category: "Bills",
    date: "2024-03-16",
    amount: "$95.25",
    icon: "/images/icons/bills.png",
    card: "/images/visa.png",
    cardType: "Visa",
    cardDigits: "*3456",
    description: "Electricity Bill",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 6,
    category: "Transport",
    date: "2024-03-15",
    amount: "$23.00",
    icon: "/images/icons/transport.png",
    card: "/images/mastercard.png",
    cardType: "Mastercard",
    cardDigits: "*4567",
    description: "Uber Ride",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 7,
    category: "Dining",
    date: "2024-03-14",
    amount: "$85.00",
    icon: "/images/icons/dining.png",
    card: "/images/visa.png",
    cardType: "Visa",
    cardDigits: "*6789",
    description: "Restaurant Bill",
    status: "Pending",
    party: "Receiver",
  },
  {
    id: 8,
    category: "Health",
    date: "2024-03-13",
    amount: "$200.00",
    icon: "/images/icons/health.png",
    card: "/images/amex.png",
    cardType: "Amex",
    cardDigits: "*7891",
    description: "Medical Checkup",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 9,
    category: "Subscriptions",
    date: "2024-03-12",
    amount: "$12.99",
    icon: "/images/icons/subscription.png",
    card: "/images/mastercard.png",
    cardType: "Mastercard",
    cardDigits: "*8901",
    description: "Netflix",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 10,
    category: "Donation",
    date: "2024-03-11",
    amount: "$30.00",
    icon: "/images/icons/donation.png",
    card: "/images/visa.png",
    cardType: "Visa",
    cardDigits: "*9012",
    description: "Charity",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 11,
    category: "Entertainment",
    date: "2024-03-10",
    amount: "$40.00",
    icon: "/images/icons/entertainment.png",
    card: "/images/mastercard.png",
    cardType: "Mastercard",
    cardDigits: "*0123",
    description: "Movie Tickets",
    status: "Pending",
    party: "Receiver",
  },
  {
    id: 12,
    category: "Travel",
    date: "2024-03-09",
    amount: "$350.00",
    icon: "/images/icons/travel.png",
    card: "/images/amex.png",
    cardType: "Amex",
    cardDigits: "*6781",
    description: "Flight Booking",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 13,
    category: "Food Delivery",
    date: "2024-03-08",
    amount: "$22.30",
    icon: "/images/icons/food.png",
    card: "/images/visa.png",
    cardType: "Visa",
    cardDigits: "*8888",
    description: "Uber Eats",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 14,
    category: "Gym",
    date: "2024-03-07",
    amount: "$50.00",
    icon: "/images/icons/gym.png",
    card: "/images/mastercard.png",
    cardType: "Mastercard",
    cardDigits: "*1212",
    description: "Monthly Membership",
    status: "Failed",
    party: "Sender",
  },
  {
    id: 15,
    category: "Freelance",
    date: "2024-03-06",
    amount: "$500.00",
    icon: "/images/icons/freelance.png",
    card: "/images/visa.png",
    cardType: "Visa",
    cardDigits: "*2222",
    description: "Upwork Payment",
    status: "Completed",
    party: "Receiver",
  },
  {
    id: 16,
    category: "Investment",
    date: "2024-03-05",
    amount: "$1000.00",
    icon: "/images/icons/investment.png",
    card: "/images/amex.png",
    cardType: "Amex",
    cardDigits: "*3434",
    description: "Stock Purchase",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 17,
    category: "Insurance",
    date: "2024-03-04",
    amount: "$89.00",
    icon: "/images/icons/insurance.png",
    card: "/images/mastercard.png",
    cardType: "Mastercard",
    cardDigits: "*5656",
    description: "Car Insurance",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 18,
    category: "Savings",
    date: "2024-03-03",
    amount: "$150.00",
    icon: "/images/icons/savings.png",
    card: "/images/visa.png",
    cardType: "Visa",
    cardDigits: "*6767",
    description: "Monthly Savings",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 19,
    category: "Rent",
    date: "2024-03-02",
    amount: "$850.00",
    icon: "/images/icons/rent.png",
    card: "/images/amex.png",
    cardType: "Amex",
    cardDigits: "*9898",
    description: "Monthly Rent",
    status: "Pending",
    party: "Receiver",
  },
  {
    id: 20,
    category: "Loan",
    date: "2024-03-01",
    amount: "$250.00",
    icon: "/images/icons/loan.png",
    card: "/images/mastercard.png",
    cardType: "Mastercard",
    cardDigits: "*7878",
    description: "Loan Repayment",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 21,
    category: "Phone Bill",
    date: "2024-02-29",
    amount: "$45.00",
    icon: "/images/icons/phone.png",
    card: "/images/visa.png",
    cardType: "Visa",
    cardDigits: "*4343",
    description: "Monthly Airtime",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 22,
    category: "Tax",
    date: "2024-02-28",
    amount: "$300.00",
    icon: "/images/icons/tax.png",
    card: "/images/amex.png",
    cardType: "Amex",
    cardDigits: "*3434",
    description: "Quarterly Tax",
    status: "Failed",
    party: "Sender",
  },
  {
    id: 23,
    category: "Repair",
    date: "2024-02-27",
    amount: "$100.00",
    icon: "/images/icons/repair.png",
    card: "/images/mastercard.png",
    cardType: "Mastercard",
    cardDigits: "*5454",
    description: "Phone Repair",
    status: "Completed",
    party: "Receiver",
  },
  {
    id: 24,
    category: "Laundry",
    date: "2024-02-26",
    amount: "$35.00",
    icon: "/images/icons/laundry.png",
    card: "/images/visa.png",
    cardType: "Visa",
    cardDigits: "*1212",
    description: "Dry Cleaning",
    status: "Pending",
    party: "Sender",
  },
  {
    id: 25,
    category: "Furniture",
    date: "2024-02-25",
    amount: "$420.00",
    icon: "/images/icons/furniture.png",
    card: "/images/amex.png",
    cardType: "Amex",
    cardDigits: "*9898",
    description: "Table & Chair",
    status: "Completed",
    party: "Receiver",
  },
  {
    id: 26,
    category: "Books",
    date: "2024-02-24",
    amount: "$18.99",
    icon: "/images/icons/books.png",
    card: "/images/mastercard.png",
    cardType: "Mastercard",
    cardDigits: "*4444",
    description: "Amazon Books",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 27,
    category: "Baby Products",
    date: "2024-02-23",
    amount: "$60.00",
    icon: "/images/icons/baby.png",
    card: "/images/visa.png",
    cardType: "Visa",
    cardDigits: "*2222",
    description: "Diapers & Wipes",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 28,
    category: "Electronics",
    date: "2024-02-22",
    amount: "$850.00",
    icon: "/images/icons/electronics.png",
    card: "/images/mastercard.png",
    cardType: "Mastercard",
    cardDigits: "*7777",
    description: "Smartphone Purchase",
    status: "Failed",
    party: "Receiver",
  },
  {
    id: 29,
    category: "Pet Care",
    date: "2024-02-21",
    amount: "$65.00",
    icon: "/images/icons/pet.png",
    card: "/images/visa.png",
    cardType: "Visa",
    cardDigits: "*1313",
    description: "Vet Visit",
    status: "Completed",
    party: "Sender",
  },
  {
    id: 30,
    category: "Beauty",
    date: "2024-02-20",
    amount: "$75.00",
    icon: "/images/icons/beauty.png",
    card: "/images/amex.png",
    cardType: "Amex",
    cardDigits: "*1010",
    description: "Salon Service",
    status: "Completed",
    party: "Receiver",
  },
];

const ITEMS_PER_PAGE = 10;

export default function TransactionsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTransactions = transactionsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(transactionsData.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Transactions</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-sm text-gray-600">
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Party</th>
                <th className="px-4 py-3">Card</th>
                <th className="px-4 py-3">Amount</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200">
              {currentTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 flex items-center gap-2">
                  {categoryIcons[tx.category] ?? <Wallet className="w-5 h-5 text-muted-foreground" />}
                    <span className="font-medium">{tx.category}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{tx.date}</td>
                  <td className="px-4 py-3">{tx.description}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 text-xs rounded font-semibold text-white ${
                        tx.status === "Completed"
                          ? "bg-green-500"
                          : tx.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{tx.party}</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <Image
                      src={tx.card}
                      alt={tx.cardType}
                      width={28}
                      height={28}
                    />
                    <span className="text-sm text-gray-500">{tx.cardDigits}</span>
                  </td>
                  <td className="px-4 py-3 font-bold">{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 text-sm rounded-md border border-gray-300 shadow-sm hover:bg-blue-100 transition ${
                page === currentPage ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
