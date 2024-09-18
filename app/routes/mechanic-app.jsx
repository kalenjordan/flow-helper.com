import { redirect } from "@remix-run/node";

export const loader = async () => {
  return redirect("https://mechanic.dev/"); // Replace with your desired URL
};

export default function Index() {
  return null;
}
