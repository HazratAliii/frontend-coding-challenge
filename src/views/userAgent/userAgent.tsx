// "use client";

// import { BackToHome } from "@/components/backToHome/backToHome";
// import { useUserAgentContext } from "@/components/providers/userAgentProvider";

// export const UserAgent = () => {
//   const { userAgent } = useUserAgentContext();

//   return (
//     <div>
//       <BackToHome />

//       {userAgent && (
//         <div className="flex font-mono font-semibold text-sm">
//           <div className="border p-2">UserAgent</div>

//           <div className="border p-2">{userAgent}</div>
//         </div>
//       )}

//       {!userAgent && <div>No user agent</div>}
//     </div>
//   );
// };

"use client";

import { useState, useEffect } from "react";

export const UserAgent = ({ serverUserAgent }: { serverUserAgent: string }) => {
  const [clientUserAgent, setClientUserAgent] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setClientUserAgent(navigator.userAgent);
    }
  }, []);

  const userAgent = clientUserAgent || serverUserAgent;

  return (
    <div className="border p-4">
      <p>
        <strong>User Agent:</strong>
      </p>
      <p>{userAgent}</p>
    </div>
  );
};
