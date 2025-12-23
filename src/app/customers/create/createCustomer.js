"use server";
import { revalidatePath } from "next/cache";

const createCustomer = async (formData) => {
  const creating_customer_name = formData.get("customer_name");
  const creating_customer_id = formData.get("customer_id");
  const creating_age = formData.get("age");
  const creating_gender = formData.get("gender");

  const body_msg = JSON.stringify({
    customer_name: creating_customer_name,
    customer_id: creating_customer_id,
    age: creating_age,
    gender: creating_gender,
  });

  const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + `/customers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body_msg,
  });

  const text = await res.text();

  if (!res.ok) {
    // エラー表示を追加
    console.error("Create customer failed:", {
      url: res.url,
      status: res.status,
      statusText: res.statusText,
      body: text,
    });
    // throw new Error("Failed to create customer");
    throw new Error(`Failed to create customer: ${res.status} ${res.statusText}`);
  }

  revalidatePath(`/customers`);
};

export default createCustomer;
