// import { API_URL } from "../utils/api";
// import { type Donation } from "@/utils/types";
import { Paper, Text, Stack, Group, Title, Card } from "@mantine/core";
import dayjs from "dayjs";

const getDonationData = async () => {
  const res = await fetch('https://donation-server-production.up.railway.app/donation', {
      cache: 'no-store',
  })
  return res.json();
}

export default async function Donation() {
  const donations = await getDonationData()
  return (
    <div>
      {donations.map((donation: any)=> {
        return (
          <div>
            <Stack>
              <Paper shadow="xs" p="md">
                <Group>
                <Text>{donation.firstName}</Text>
                <Text>{donation.lastName}</Text>
                <Text>{donation.email}</Text>
                <Text>{donation.amount}</Text>
                <Text>{donation.time}</Text>
                </Group>
              </Paper>
            </Stack>
          </div>
        )
      })}
    </div>
  );
}
