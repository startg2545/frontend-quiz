// import { API_URL } from "@/utils/api";
"use client"
import { useEffect, useState } from "react";
import { Input, Button, Card, Title, Stack, Group, Box, TextInput, Checkbox, Code } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Form() {
  const [form, setForm] = useState({
    firstName: String,
    lastName: String,
    email: String,
    amount: Number,
  })

  function onFormChange(event: React.FormEvent<EventTarget>) {
    const target = event.target as HTMLInputElement;
    setForm((state) => {
      return {
        ...state,
        [target.name]: target.value,
      };
    });
  }

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    var body = { ...form };

    var response = await fetch("https://donation-server-production.up.railway.app/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          amount: form.amount
        }),
      });

    var json = await response.json();
    console.log("json", json);
  }
  return (
    <Card withBorder shadow="xs" p="xl" bg="cyan.2">
      <Title order={1} color="blue">
        Donate
      </Title>
      <form onSubmit={onSubmit}>
        <TextInput
          label="firstname"
          placeholder="First Name"
          name="firstName"
          onChange={onFormChange}
        />
        <TextInput
          label="lastname"
          placeholder="Last Name"
          name="lastName"
          onChange={onFormChange}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          name="email"
          onChange={onFormChange}
        />
        <TextInput
          label="Amount"
          placeholder="Amount"
          name="amount"
          onChange={onFormChange}
        />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}
