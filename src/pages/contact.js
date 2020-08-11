import React from "react";
import styled from "styled-components";
// local imports
import Layout from "../layout";
import Siderbar from "../components/homepage/Sidebar";
import { DivMain } from "../components/homepage/MainBar";
import { PostMeta, PostComments } from "./about-me";
import ContactForm from "../components/contact";

export default function Contact() {
    const contactImg =
        "https://solopine.com/rosemary/wp-content/uploads/2015/03/post8.jpg";
    return (
        <Layout>
            <main className="container">
                <div className="content">
                    <DivMain className="main">
                        <article>
                            <PostHeader>
                                <h1>Contact</h1>
                            </PostHeader>
                            <PostImg>
                                <a href="#">
                                    <img src={contactImg} />
                                </a>
                            </PostImg>
                            <PostEntry>
                                <p>
                                    Meh synth Schlitz, tempor duis single-origin
                                    coffee ea next level ethnic fingerstache
                                    fanny pack nostrud. Photo booth anim 8-bit
                                    hella, PBR 3 wolf moon beard Helvetica.
                                    Salvia esse nihil, flexitarian Truffaut
                                    synth art party deep v chillwave. Seitan
                                    High Life reprehenderit consectetur
                                    cupidatat kogi. Et leggings fanny pack
                                    tempor duis single-origin coffee. Photo
                                    booth anim 8-bit hella, PBR 3 wolf moon.
                                </p>
                                <div>
                                    <div>
                                        <ContactForm />
                                    </div>
                                </div>
                            </PostEntry>
                            <PostMeta className="post-meta" />
                            <PostComments />
                        </article>
                    </DivMain>
                    <Siderbar />
                </div>
            </main>
        </Layout>
    );
}

const PostHeader = styled.div`
    margin-bottom: 25px;
    text-align: center;
    h1 {
        color: #000;
        font-size: 26px;
        -o-transition: 0.2s;
        -ms-transition: 0.2s;
        -moz-transition: 0.2s;
        -webkit-transition: 0.2s;
    }
`;
const PostImg = styled.div`
    margin-bottom: 20px;
    text-align: center;
    img {
        max-width: 100%;
        height: auto;
    }

    a img {
        border: none;
    }
`;
const PostEntry = styled.div`
    p {
        margin-bottom: 20px;
    }

    form {
        label {
            display: block;
            margin-bottom: 20px;
        }
        input {
            padding: 8px;
            border: 1px solid #ddd;
            margin-right: 10px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            color: #777;
            font-size: 12px;
            margin-top: 6px;
            margin-bottom: 6px;
        }

        textarea {
            width: 95%;
            padding: 8px;
            border: 1px solid #ddd;
            margin-right: 10px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            color: #777;
            font-size: 12px;
            margin-top: 6px;
            margin-bottom: 10px;
        }

        .submit {
            background: #eee;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            padding: 12px 24px;
            color: #666;
            letter-spacing: 3px;
            font-size: 11px;
            text-transform: uppercase;
            cursor: pointer;
            -o-transition: 0.3s;
            -ms-transition: 0.3s;
            -moz-transition: 0.3s;
            -webkit-transition: 0.3s;
            transition: 0.3s;
            display: block;
            border: none;
            width: auto;

            :hover {
                background: #333;
                color: #fff;
            }
        }
    }
`;
