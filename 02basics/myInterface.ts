interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const ismaeil: Admin = {
  dbId: 22,
  email: "i@i.com",
  userId: 12245,
  role: "admin",
  githubToken: "github",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "ismaeil", off: 10) => {
    return 10;
  },
};

ismaeil.email = "is@is.com";
// ismaeil.dbId = 33;

export {};
