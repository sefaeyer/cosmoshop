"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";
import iwatch from "../../public/images/iwatch.png";

export const Redirect = () => {
  const router = useRouter();

  const handleClick = () => {
    const res = confirm("Are you sure to redirect?");
    if (!res) return;

    router.push("/dashboard"); //push ta onceki sayfayi hafizada tutar
    //ayni yere doner
  };

  return (
    <div>
      <Image
        src="/images/nature (1).jpg"
        width="1000"
        height="667"
        alt="landscape"
      />
      <Image src={iwatch} alt="iwatch" />

      <div style={{ position: "relative", height: "200px" }}>
        <Image
          src="https://plus.unsplash.com/premium_photo-1726880637228-52cb20f7bc7d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          alt="landscape"
          style={{ objectFit: "cover" }}
        />
      </div>

      <Button onClick={handleClick}>Redirect</Button>
    </div>
  );
};
