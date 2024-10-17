import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import React from "react";


export const metadata = {
	title: "About Us ",
	description: "Cheap Electronics Devices",
};

const Page = () => {
	return (
		<>
			<PageHeader title="About Us"/>

      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>



			<p>
				<Link href="/">Home</Link>
			</p>
			<p>
				<Link
					href={{
						pathname: "/products",
						query: {
							q: "test",
							page: 1,
							limit: 12,
							sort: "name",
							order: "asc",
							status: "active",
							category: "laptop",
						},
					}}
				>
					Products
				</Link>
			</p>
		</>
	);
};

export default Page;