
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const customers = [
  {
    id: "1",
    name: "Alex Thompson",
    email: "alex@example.com",
    company: "Acme Inc",
    status: "Active",
    spent: "$2,450",
    lastActive: "Today",
  },
  {
    id: "2",
    name: "Sarah Miller",
    email: "sarah@example.com",
    company: "TechStart",
    status: "Active",
    spent: "$1,890",
    lastActive: "Yesterday",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "james@example.com",
    company: "InnovateX",
    status: "Inactive",
    spent: "$4,250",
    lastActive: "Last week",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    company: "FutureVision",
    status: "Active",
    spent: "$3,400",
    lastActive: "2 days ago",
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "michael@example.com",
    company: "GrowthLabs",
    status: "Trial",
    spent: "$0",
    lastActive: "Today",
  },
];

const Customers = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Customers</h2>
              <p className="text-muted-foreground">
                Manage and monitor your customer base
              </p>
            </div>
            <div className="mt-4 flex space-x-2 sm:mt-0">
              <Button>Add Customer</Button>
            </div>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2,543</div>
                <p className="text-xs text-muted-foreground">
                  +8% from previous month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Active Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,832</div>
                <p className="text-xs text-muted-foreground">
                  +12% from previous month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Average Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$128</div>
                <p className="text-xs text-muted-foreground">
                  Per customer monthly
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Customer List</CardTitle>
              <CardDescription>View and manage your customers</CardDescription>
              <div className="flex items-center gap-2 pt-3">
                <Input placeholder="Search customers..." className="max-w-sm" />
                <Button variant="outline" size="sm">
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Spent</TableHead>
                    <TableHead>Last Active</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">
                        {customer.name}
                      </TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>{customer.company}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            customer.status === "Active"
                              ? "default"
                              : customer.status === "Trial"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{customer.spent}</TableCell>
                      <TableCell>{customer.lastActive}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Customers;
