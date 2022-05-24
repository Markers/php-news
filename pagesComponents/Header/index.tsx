import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tabs, TabsHeader, Tab, Typography, Button, Tooltip } from "../../src";

export default function Header() {
  const [version, setVersion] = useState("npm i @material-tailwind/react");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);

  return (
    <div className="bg-no-repeat h-screen min-h-screen bg-[url('/img/bg-header.jpg')] bg-cover bg-center"></div>
  );
}
