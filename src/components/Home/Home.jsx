import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";
import { Button } from "../ui/button";
import ProductReel from "../ProductReel";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../FireBase/FireBase";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/SignIn";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div>
      {userDetails ? (
        <div className="flex justify-between items-center mt-6 mx-28">
          <div className="flex items-baseline">
            <h className="text-5xl font-bold tracking-tight flex items-baseline text-center">
              Hello
              <div className="text-6xl font-bold ml-4 text-blue-600">
                {userDetails.name}
              </div>
              <img
                className="h-14 w-14 object-cover items-baseline ml-3 flex"
                src="Waving-Hand-Emoji-1024x1024.png"
                alt="Waving Hand"
              />
            </h>
          </div>
          <Button
            variant="destructive"
            className=" w-32"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      ) : null}
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Marketplace for high-quality
            <span className="text-blue-600 shadow-md font-bold">
              {" "}
              Electronics Products
            </span>
          </h1>

          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Digital World. Every Asset on our Platform is verified by
            our team to ensure our highest quality standards
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
            <Button variant="default">Browse Products</Button>
            <Button variant="ghost">Our quality Promise &rarr;</Button>
          </div>
        </div>
        <ProductReel />
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-100 mt-20">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-green-800">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default Home;
