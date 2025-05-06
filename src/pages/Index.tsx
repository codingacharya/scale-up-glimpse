
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { LineChart } from "@/components/dashboard/LineChart";
import { BarChart } from "@/components/dashboard/BarChart";
import { PieChart } from "@/components/dashboard/PieChart";
import { 
  Users, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  BarChart as BarChartIcon 
} from "lucide-react";

const revenueData = [
  { name: 'Jan', revenue: 2400, expenses: 1400 },
  { name: 'Feb', revenue: 1398, expenses: 1210 },
  { name: 'Mar', revenue: 9800, expenses: 3908 },
  { name: 'Apr', revenue: 3908, expenses: 2000 },
  { name: 'May', revenue: 4800, expenses: 2181 },
  { name: 'Jun', revenue: 3800, expenses: 2500 },
  { name: 'Jul', revenue: 4300, expenses: 2100 },
];

const userAcquisitionData = [
  { name: 'Jan', organic: 400, paid: 240 },
  { name: 'Feb', organic: 300, paid: 138 },
  { name: 'Mar', organic: 520, paid: 380 },
  { name: 'Apr', organic: 270, paid: 390 },
  { name: 'May', organic: 400, paid: 480 },
  { name: 'Jun', organic: 380, paid: 380 },
  { name: 'Jul', organic: 430, paid: 400 },
];

const productUsageData = [
  { name: 'Feature A', value: 400 },
  { name: 'Feature B', value: 300 },
  { name: 'Feature C', value: 300 },
  { name: 'Feature D', value: 200 },
];

const pieColors = ['#4f46e5', '#2563eb', '#3b82f6', '#60a5fa'];

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Total Customers"
              value="2,543"
              trend={{ value: 12, positive: true }}
              icon={Users}
            />
            <MetricCard
              title="Monthly Revenue"
              value="$45,234"
              trend={{ value: 8, positive: true }}
              icon={DollarSign}
            />
            <MetricCard
              title="Active Users"
              value="1,789"
              trend={{ value: 15, positive: true }}
              icon={ArrowUpRight}
            />
            <MetricCard
              title="Churn Rate"
              value="3.2%"
              trend={{ value: 2, positive: false }}
              icon={ArrowDownRight}
            />
          </div>
          
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <LineChart
              title="Revenue vs Expenses"
              data={revenueData}
              lines={[
                { dataKey: "revenue", stroke: "#4f46e5" },
                { dataKey: "expenses", stroke: "#94a3b8" }
              ]}
            />
            <BarChart
              title="User Acquisition"
              data={userAcquisitionData}
              bars={[
                { dataKey: "organic", fill: "#3b82f6" },
                { dataKey: "paid", fill: "#60a5fa" }
              ]}
            />
          </div>
          
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <BarChart
                title="Weekly Active Users"
                data={[
                  { name: 'Week 1', users: 4000 },
                  { name: 'Week 2', users: 3000 },
                  { name: 'Week 3', users: 5000 },
                  { name: 'Week 4', users: 4500 },
                  { name: 'Week 5', users: 6000 },
                ]}
                bars={[
                  { dataKey: "users", fill: "#4f46e5" }
                ]}
              />
            </div>
            <div>
              <PieChart
                title="Feature Usage"
                data={productUsageData}
                colors={pieColors}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
