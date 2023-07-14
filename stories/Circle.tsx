import React, { useMemo } from "react";

type Props = {
  // 以下のコメントがドキュメントに含まれる
  /**　色の種類　*/
  variant: "orange" | "green" | "yellow";
};

// 以下のコメントがドキュメントに含まれる
/**
 * 円のデザイン
 */
const Circle = ({ variant }: Props) => {
  const bgColor = useMemo(() => {
    switch (variant) {
      case "orange":
        return "bg-orange-500";
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-500";
    }
  }, [variant]);
  return <div className={`${bgColor} w-14 h-14 rounded-full p-2`}></div>;
};

export default Circle;
