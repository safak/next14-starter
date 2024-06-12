import Image from "next/image";
import React from "react";

function SingleBlog() {
  return (
    <div>
      <div className="flex flex-col m-8">
        <Image
          src="/blogImage.jpg"
          alt="home"
          width={500}
          height={500}
          className="rounded-lg w-full h-auto mr-8"
        />
        <div className="flex flex-col">
          <div className="text-[#192841] text-3xl font-bold my-8">
            Me and Beach
          </div>
          <div className="flex flex-row mb-4 gap-4">
            <Image
              src="/profile.jpg"
              alt="home"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="text-[#192841] text-xl font-light mt-4">
              Author :{" "}
            </div>
            <div className="text-[#192841] text-xl font-light mt-4">
              Liyanage C.V.K
            </div>
          </div>
          <div className="text-[#192841] text-xl font-light ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam
            libero sapiente, voluptatum est maiores ipsa nobis corporis at
            quidem! Possimus corporis pariatur ipsam fugit similique.
            Dignissimos deleniti impedit dolorem? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ipsam impedit similique explicabo
            facere iusto excepturi, ipsa magnam vero quia delectus molestiae
            itaque recusandae, odit, repudiandae architecto atque sapiente saepe
            necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cumque nam libero sapiente, voluptatum est maiores ipsa nobis
            corporis at quidem! Possimus corporis pariatur ipsam fugit
            similique. Dignissimos deleniti impedit dolorem? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Ipsam impedit similique
            explicabo facere iusto excepturi, ipsa magnam vero quia delectus
            molestiae itaque recusandae, odit, repudiandae architecto atque
            sapiente saepe necessitatibus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cumque nam libero sapiente, voluptatum
            est maiores ipsa nobis corporis at quidem! Possimus corporis
            pariatur ipsam fugit similique. Dignissimos deleniti impedit
            dolorem? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ipsam impedit similique explicabo facere iusto excepturi, ipsa
            magnam vero quia delectus molestiae itaque recusandae, odit,
            repudiandae architecto atque sapiente saepe necessitatibus! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Cumque nam libero
            sapiente, voluptatum est maiores ipsa nobis corporis at quidem!
            Possimus corporis pariatur ipsam fugit similique. Dignissimos
            deleniti impedit dolorem? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ipsam impedit similique explicabo facere iusto
            excepturi, ipsa magnam vero quia delectus molestiae itaque
            recusandae, odit, repudiandae architecto atque sapiente saepe
            necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cumque nam libero sapiente, voluptatum est maiores ipsa nobis
            corporis at quidem! Possimus corporis pariatur ipsam fugit
            similique. Dignissimos deleniti impedit dolorem? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Ipsam impedit similique
            explicabo facere iusto excepturi, ipsa magnam vero quia delectus
            molestiae itaque recusandae, odit, repudiandae architecto atque
            sapiente saepe necessitatibus!
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
