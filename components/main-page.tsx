import styled from "styled-components";
import { Article } from "types/article";
import _, { upperCase } from "lodash";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { getCategoryColor } from "@/utils/color";
import Timer from "../assets/images/timer.svg";
dayjs.extend(localizedFormat);

const MainPageWrapper = styled.div`
  a {
    -webkit-transition: box-shadow 250ms ease-in;
    transition: box-shadow 250ms ease-in;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 7px 14px rgb(71 77 87 / 8%), 0px 3px 6px rgb(20 21 26 / 8%);

    /* a 태그 CSS 없애기 */
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    box-shadow: 0px 0px 1px rgb(20 21 26 / 10%),
      0px 16px 32px rgb(71 77 87 / 16%), 0px 8px 16px rgb(20 21 26 / 16%);
  }

  .articles {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    grid-gap: 25px;
  }

  .card {
    display: flex;
  }
  .card-image {
    margin-bottom: 10px;
    padding-top: 60%;
    background-position: center center;
    background-size: cover;
    border-radius: 20px;
  }

  .card-title {
    /* Font Style */
    line-height: 28px;

    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    /* Title Grid */
    margin: 0px 5px 10px;
    color: #14151a;
    height: 80px;
  }

  .card-descrition {
    span {
      text-overflow: ellipsis;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      color: ${(props) => props.theme.colors.gray};
    }

    line-height: 1.45;
    margin: 0px 5px 10px;
  }

  .card-outer {
    -webkit-box-align: center;
    align-items: center;
    display: inline-flex;
    margin: 0px 5px 10px;
    width: 100%;
    span {
      margin: 0px 5px;
    }
    span:last-child {
      margin-left: auto;
      padding-right: 20px;
    }

    .readme {
      -webkit-box-align: center;
      align-items: center;
      display: inline-flex;
    }
  }
`;

interface LabelProps {
  color: string;
}

const Label = styled.span<LabelProps>`
  -webkit-box-align: center;
  align-items: center;
  border-radius: 10px;
  display: inline-flex;
  padding: 0px 10px;
  font-size: 14px;
  height: 30px;
  background-color: ${(props) => props.color + 62};

  div {
    background-color: ${(props) => props.color};
    border-radius: 50%;
    margin-inline-end: 5px;
    height: 10px;
    width: 10px;
  }
`;

function MainPage({ data }: { data: Article[] }) {
  const articles = data.filter((article) => article.post_id);
  const filtterArticle = _.take(_.uniqBy(articles, "post_id"), 70);

  return (
    <MainPageWrapper>
      <article>
        <h1>Main Page</h1>
        <div className="articles">
          {filtterArticle.map((article) => (
            <div className="card" key={article.post_id}>
              <a href="">
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
                      article.category
                        .replaceAll("-", " ")
                        .replaceAll("monthly", "")
                    )}
                  </Label>
                  <span>{dayjs(article.publish_date).format("ll")}</span>
                  <span className="readme">
                    <Timer /> {_.random(3, 14)} m
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </article>
    </MainPageWrapper>
  );
}

export default MainPage;
