import _, { upperCase } from "lodash";
import { Card, Label } from "../../styles/common/article/card";
import Timer from "../../assets/images/timer.svg";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Article } from "types/article";
import { getCategoryColor } from "@/utils/color";
import Link from "next/link";
dayjs.extend(localizedFormat);

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  return (
    <Card key={article.post_id}>
      <Link
        href={{
          pathname: "/[category]/[postId]",
          query: { category: article.category, postId: article.post_id },
        }}
      >
        <a>
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${article.translated_thumbnail})`,
            }}
          ></div>
          <div className="card-title">
            <h3>{article.translated_title}</h3>
          </div>
          <div className="card-descrition">
            <span>{article.translated_description}</span>
          </div>
          <div className="card-outer">
            <Label
              color={getCategoryColor(article.category)}
              className="category"
            >
              <div></div>
              {upperCase(
                article.category.replaceAll("-", " ").replaceAll("monthly", "")
              )}
            </Label>
            <span>{dayjs(article.publish_date).format("ll")}</span>
            <span className="readme">
              <Timer /> {_.random(3, 14)} m
            </span>
          </div>
        </a>
      </Link>
    </Card>
  );
};

export default ArticleCard;
