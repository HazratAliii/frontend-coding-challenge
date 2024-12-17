import { headers } from "next/headers";
import { UserAgent } from "@/views/userAgent";

export const metadata = {
  title: "User Agent Page",
};

const UserAgentRoot = async () => {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "User agent not available";

  return (
    <div>
      <h1 className="text-2xl font-bold">User Agent</h1>
      <UserAgent serverUserAgent={userAgent} />
    </div>
  );
};

export default UserAgentRoot;
