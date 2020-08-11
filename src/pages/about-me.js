import React from "react";
import Layout from "../layout";
import styled from "styled-components";

function AboutMe() {
    const imgLink =
        "https://solopine.com/rosemary/wp-content/uploads/2015/03/about2.jpg";
    return (
        <Layout>
            <div className="container">
                <div id="content">
                    <main className="fullwidth">
                        <article>
                            <PostHeader>
                                <h1>About Me:</h1>
                            </PostHeader>
                            <PostEntry>
                                <p>
                                    <img src={imgLink} className="alignright" />
                                    Meh synth Schlitz, tempor duis single-origin
                                    coffee ea next level ethnic fingerstache
                                    fanny pack nostrud. Photo booth anim 8-bit
                                    hella, PBR 3 wolf moon beard Helvetica.
                                    Salvia esse nihil, flexitarian Truffaut
                                    synth art party deep v chillwave. Seitan
                                    High Life reprehenderit consectetur
                                    cupidatat kogi. Et leggings fanny pack, elit
                                    bespoke vinyl art party Pitchfork selfies
                                    master cleanse Kickstarter seitan retro.
                                    Drinking vinegar stumptown yr pop-up artisan
                                    sunt. Deep v cliche lomo.
                                </p>
                                <p>
                                    Exercitation photo booth stumptown tote bag
                                    Banksy, elit small batch freegan sed. Craft
                                    beer elit seitan exercitation, photo booth
                                    et 8-bit kale chips proident chillwave deep
                                    v laborum. Aliquip veniam delectus, Marfa
                                    eiusmod Pinterest. Et leggings fanny pack,
                                    elit bespoke vinyl art.
                                </p>
                                <p>
                                    Disrupt vero ea id fugiat, lo-fi lomo
                                    post-ironic irony kitsch Banksy. Tumblr kale
                                    chips single-origin coffee Wes Anderson +1
                                    tousled, disrupt butcher sapiente banh mi
                                    brunch nisi irony. Artisan wolf fap lomo,
                                    laborum Tumblr anim consequat fashion axe
                                    sartorial leggings viral.
                                </p>
                                <p>
                                    Exercitation photo booth stumptown tote bag
                                    Banksy, elit small batch freegan sed. Craft
                                    beer elit seitan exercitation, photo booth
                                    et 8-bit kale chips proident chillwave deep
                                    v laborum. Aliquip veniam delectus, Marfa
                                    eiusmod Pinterest. Et leggings fanny pack,
                                    elit bespoke vinyl art
                                </p>
                                <p>
                                    Meh synth Schlitz, tempor duis single-origin
                                    coffee ea next level ethnic fingerstache
                                    fanny pack nostrud. Photo booth anim 8-bit
                                    hella, PBR 3 wolf moon beard Helvetica.
                                    Salvia esse nihil, flexitarian Truffaut
                                    synth art party deep v chillwave. Seitan
                                    High Life reprehenderit consectetur
                                    cupidatat kogi. Et leggings fanny pack, elit
                                    bespoke vinyl art.
                                </p>
                                <p>
                                    Meh synth Schlitz, tempor duis single-origin
                                    coffee ea next level ethnic fingerstache
                                    fanny pack nostrud. Photo booth anim 8-bit
                                    hella, PBR 3 wolf moon beard Helvetica.
                                    Salvia esse nihil, flexitarian Truffaut
                                    synth art party deep v chillwave. Seitan
                                    High Life reprehenderit consectetur
                                    cupidatat kogi. Et leggings fanny pack, elit
                                    bespoke vinyl art party Pitchfork selfies
                                    master cleanse Kickstarter seitan retro.
                                    Drinking vinegar stumptown yr pop-up artisan
                                    sunt. Deep v cliche lomo biodiesel Neutra.
                                </p>
                                <BlockedQuote>
                                    <p className="p-img blo-p">
                                        Truffaut synth art party deep v
                                        chillwave. Seitan High Life
                                        reprehenderit consectetur cupidatat
                                        kogi. Et leggings fanny pack, elit
                                        bespoke vinyl art party artisan.
                                    </p>
                                    <cite>John Doe</cite>
                                </BlockedQuote>
                                <p>
                                    Disrupt vero ea id fugiat, lo-fi lomo
                                    post-ironic irony kitsch Banksy. Tumblr kale
                                    chips single-origin coffee Wes Anderson +1
                                    tousled, disrupt butcher sapiente banh mi
                                    brunch nisi irony. Artisan wolf fap lomo,
                                    laborum Tumblr anim consequat fashion axe
                                    sartorial leggings viral.
                                </p>
                                <img
                                    src="https://solopine.com/redwood/wp-content/uploads/2015/06/signing.png"
                                    alt="about me"
                                />
                            </PostEntry>
                            <PostMeta />
                            <PostComments />
                        </article>
                    </main>
                </div>
            </div>
        </Layout>
    );
}

const PostMeta = () => (
    <PostMetaStyled className="post-meta">
        <div className="meta-share">
            <span className="share-text">
                Share
                <a href="#">
                    <i className="fa fa-twitter"></i>
                </a>
            </span>
        </div>
    </PostMetaStyled>
);

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

const PostEntry = styled.div`
    p {
        margin-bottom: 26px;
    }

    img {
        border: 0;
        max-width: 100%;
        height: auto;
    }

    .alignright {
        float: right;
        margin: 5px 0 20px 20px;
    }
`;

const BlockedQuote = styled.blockquote`
    border-left: 3px solid;
    padding: 30px 60px;
    margin: 20px 0 0;

    p {
        font-family: "Georgia";
        font-style: italic;
        font-size: 20px;
        line-height: 30px;
        color: #000;
        position: relative;
    }

    cite {
        margin-top: -10px;
        color: #999;
        display: block;
        font-style: normal;
        font-weight: 400;

        :before {
            content: "-";
            margin-right: 4px;
        }
    }
`;

const PostMetaStyled = styled.div`
    margin-top: 35px;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 10px;
    font-style: italic;
    clear: both;

    .meta-share {
        float: right;
        color: #999;
        font-size: 13px;

        .share-text {
            margin-right: 2px;
        }
        a {
            margin-left: 9px;
            font-size: 16px;
        }
    }
`;

const PostComments = styled.div`
    margin-bottom: 60px;
    margin-top: 60px;
`;

export default AboutMe;
export { PostMeta, PostComments };
