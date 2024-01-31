import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <div>
      <h1>Dashboard</h1>
      <div>{JSON.stringify(session, null, 2)}</div>
    </div>
  );
};
export default DashboardPage;
