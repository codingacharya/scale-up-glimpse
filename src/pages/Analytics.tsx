
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { LineChart } from "@/components/dashboard/LineChart";
import { BarChart } from "@/components/dashboard/BarChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const monthlyData = [
  { name: 'Jan', users: 2400, conversions: 1240, revenue: 8400 },
  { name: 'Feb', users: 1398, conversions: 1000, revenue: 6210 },
  { name: 'Mar', users: 9800, conversions: 2300, revenue: 12400 },
  { name: 'Apr', users: 3908, conversions: 2000, revenue: 9000 },
  { name: 'May', users: 4800, conversions: 2100, revenue: 9800 },
  { name: 'Jun', users: 3800, conversions: 2200, revenue: 10400 },
];

const channelData = [
  { name: 'Organic', value: 40 },
  { name: 'Social', value: 25 },
  { name: 'Email', value: 15 },
  { name: 'Referral', value: 20 },
];

const Analytics = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Analytics Overview</h2>
            <p className="text-muted-foreground">Detailed metrics about your startup's performance</p>
          </div>
          
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Time</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24.8%</div>
                <p className="text-xs text-muted-foreground">+2.5% from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Avg. Session Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3m 42s</div>
                <p className="text-xs text-muted-foreground">-0.5% from previous period</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bounce Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">42.1%</div>
                <p className="text-xs text-muted-foreground">-1.8% from previous period</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <LineChart
              title="Key Metrics Over Time"
              data={monthlyData}
              lines={[
                { dataKey: "users", stroke: "#4f46e5" },
                { dataKey: "conversions", stroke: "#3b82f6" },
                { dataKey: "revenue", stroke: "#60a5fa" },
              ]}
            />
            <BarChart
              title="Traffic Sources"
              data={[
                { name: 'Organic', value: 4000 },
                { name: 'Direct', value: 3000 },
                { name: 'Social', value: 2000 },
                { name: 'Referral', value: 2780 },
                { name: 'Email', value: 1890 },
              ]}
              bars={[
                { dataKey: "value", fill: "#4f46e5" },
              ]}
            />
          </div>
          
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>User Engagement by Feature</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <BarChart
                    title=""
                    data={[
                      { name: 'Feature A', active: 4000, total: 6000 },
                      { name: 'Feature B', active: 3000, total: 5000 },
                      { name: 'Feature C', active: 2000, total: 4000 },
                      { name: 'Feature D', active: 2780, total: 3500 },
                      { name: 'Feature E', active: 1890, total: 3000 },
                    ]}
                    bars={[
                      { dataKey: "active", fill: "#4f46e5" },
                      { dataKey: "total", fill: "#94a3b8" },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
