import React from "react";
import { useTranslation } from "react-i18next";


function UnderNav() {
  const { t } = useTranslation();
  return (
    <div>
      <div
        className="w-full h-[650px] bg-cover md:h-[700px] lg:h-[800px] text-center pt-5"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="unnav-text  text-[100px] pt-40 md:text-[150px] md:pt-52 lg:text-[200px] lg:pt-60">
         {t("Recipes")}
        </h1>

        <p className=" mx-7 md:text-[20px] lg:text-[25px]">
          {t("Discover easy, delicious recipes made for everyday cooking. Explore, try and make something amazing today")}
        </p>
       
      </div>
    </div>
  );
}

export default UnderNav;
