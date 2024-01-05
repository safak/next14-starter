import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Lama Dev - 404 Not Found ",
  description: "404 description",
};

const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>Böyle bir sayfa bulunamadı</p>
      <Link href="/">Anasayfaya Dön</Link>
    </div>
  );
};

export default NotFound;
