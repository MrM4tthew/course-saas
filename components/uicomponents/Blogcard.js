import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Blogcardcontainer = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 450px;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  border-radius: 5px;

  img {
    width: 100%;
    object-fit: cover;
    height: 45%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .contentContainer {
    padding: 13px 15px 20px 15px;
    height: 55%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    h3 {
      letter-spacing: 0.5px;
    }

    .categories {
      margin-top: auto;
      span {
        font-size: 11.5px;
        font-weight: 300;
        background-color: lightgray;
        border-radius: 15px;
        padding: 8px 12px;
      }
      span:not(:last-child) {
        margin-right: 7px;
      }
    }
  }
`;

const Blogcard = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <a>
        <Blogcardcontainer>
          <img
            src={blog._embedded["wp:featuredmedia"]["0"].source_url}
            alt=""
          />
          <div className="contentContainer">
            <h3>{blog.title.rendered}</h3>
            <div className="categories">
              {blog._embedded["wp:term"][0].map((category, key) => (
                <span key={key}>{category.name}</span>
              ))}
            </div>
          </div>
          {/* <span>{blog._embedded["author"][0].name}</span> */}
        </Blogcardcontainer>
      </a>
    </Link>
  );
};

export default Blogcard;
