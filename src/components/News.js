import React, { useEffect, useState } from "react";
import { getMatchesInfo, getNews } from "../api/cricapi";
import "../css/Cricbuzz.css";
import Cricbuzz from "./Cricbuzz";
import "../css/News.css";
import spinner from "../img/spinner.gif";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const root = {
  width: "80%",
};
const heading = {
  fontSize: "1.1rem",
  fontWeight: "500",
};

function SimpleAccordion({ news }) {
  // console.log(news);
  //let content = news.news.content.toString().split("[")[0].trim()
  //console.log(content)
  return (
    <div style={root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accordSummary">
            <h4 style={heading}>{news.title}</h4>
            <small>{new Date(news.publishedAt).toLocaleString()}</small>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordDetails">
            <p>{news.description}</p>
            <img src={news.urlToImage} alt="" />
            <div className="accordDetailsDesc">
              {/* <p>{news.content.toString().split("[")[0].trim()}</p> */}
              <p>{news.content}</p>
            </div>
            <div className="accordFullStory">
              <a
                className="link"
                href={news.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                Read Full Story Here
              </a>
            </div>
            <div className="accordSource">
              <p>
                News Courtsey:{" "}
                <span className="source">{news.source.name}</span>
              </p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function News() {
  const [matches, setMatches] = useState([]);
  const [news, setNews] = useState([]);
  const limit = matches;
  //console.log(limit);
  useEffect(() => {
    getMatchesInfo()
      .then((data) => {
        setMatches(data.data.slice(0, 5));
        console.log("kk");
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getNews().then((res) => {
      setNews(res.articles);
      setLoading(false);
    });
  }, []);
  //console.log(news);
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Cricbuzz key={limit.id} limit={limit} />
      {!loading ? (
        <div className="news">
          <h3>Latest Sports News</h3>
          {news.map((_news) => (
            <SimpleAccordion news={_news} />
          ))}
        </div>
      ) : (
        <>
          <img
            style={{
              position: "absolute",
              width: 260,
              height: 300,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            src={spinner}
            alt="Loading"
          />
        </>
      )}
    </>
  );
}

export default News;
