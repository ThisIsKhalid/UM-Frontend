import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";

type Items = {
  label: string;
  link: string;
};

const UMBreadCrumb = ({ items }: { items: Items[] }) => {
  const breadCrumbsItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];

  return <Breadcrumb items={breadCrumbsItems}>UMBreadCrumb</Breadcrumb>;
};

export default UMBreadCrumb;
