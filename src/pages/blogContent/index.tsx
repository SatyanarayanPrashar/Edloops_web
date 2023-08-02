import ChatBox from "@/Components/ChatBox";
import AuthLayout from "@/Components/Layout/AuthLayout";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Blog Content</title>
      </Head>
      <AuthLayout>
        <div className="mainblog mt-4">
          <div className="contentblog">
            <h1>Best websites to learn Frontend Development</h1>
            <h2>Why web development?</h2>
            <p>
              Web development is a field that is not going anywhere anytime
              soon. The web is moving quickly, and there are regular
              improvements to the devices many people use daily.
            </p>
            <p>
              Cloud-based applications have allowed us to do the heavy lifting
              in the cloud and use the browser as a bridge to connect powerful
              backend servers with less capable and powerful frontends.
            </p>
            <p>
              Now is the best time to learn web development if you're looking to
              learn something.
            </p>
            <p>
              Not only does web development open a plethora of opportunities for
              you as an individual, but you'll also be able to code and deploy
              complete projects end-to-end which can be consumed by almost
              everyone on the planet.
            </p>
            <p>
              Since most people have access to a browser, every person is just a
              single URL away from the web-app you've coded. If you compare this
              with a desktop application or a hardware-based product, you'll see
              that it's just not that scalable compared to the web.
            </p>
            <h3>
              Now that we've established the fact that the web is the best way
              to go right now, let's see how to learn web development in the
              best way possible.
            </h3>
            <p>
              The web is vast – start small and keep it small. You have probably
              seen a large number of JavaScript frameworks and libraries out
              there like React, Angular, Vue, Ember, jQuery, XYZ, and so on.
            </p>
            <p>
              Some very common questions I get as a YouTuber posting web
              development content are the following:
            </p>
            <ul>
              <li>Should I learn X?</li>
              <li>Is X better than Y?</li>
              <li>What is the scope of Z?</li>
            </ul>
            <p>
              Always remember two things about technology, especially about the
              web:
            </p>
            <ol>
              <li>
                Your tech stack almost always never matters. If you're good
                enough with your language/framework, you'll win every time.
              </li>
              <li>
                You never need to learn everything. Never. You can be a jack of
                all trades, but make sure you're a master of one.
              </li>
            </ol>
            <p>
              To summarize this section, you need to think very small when you
              start. It is super easy to get carried away with that hot
              framework that was just released. Just don't try to race ahead by
              dropping old tech and adapting new tech without doing proper
              research.
            </p>
            <h3>Start with HTML and CSS</h3>
            <p>
              I cannot stress this enough. It pains me to see a ton of people
              asking me questions about their React projects when the answer
              lies in basic HTML or CSS.
            </p>
            <p>
              JavaScript was only a browser scripting language in the beginning.
              And although it's much more than that now, it doesn't change the
              fact that on the web it complements HTML and CSS.
            </p>
            <p>
              With advancements in web standards, there's so much you can
              achieve in CSS alone. For a lot of things, JavaScript is not even
              required.
            </p>
            <p>
              Animations? You got it. Drag-and-drop? HTML can handle that.
              Layouts? Checkout the Flexbox or Grid CSS APIs!
            </p>
            <h2>Go wide or go deep?</h2>
            <p>
              There are two approaches when you learn web development – go wide
              or go deep.
            </p>
            <p>
              Going wide means you start learning many things together. This
              might work for some people, but not for others. You might
              overwhelm yourself with tutorials, exercises, videos, and blogs,
              then eventually give up.
            </p>
            <p>
              Going deep means you start learning one thing and try to learn as
              much as you can about it. This has its own set of pros and cons.
              You might get bored or give up because you don't see results.
            </p>
            <p>
              So what's the solution? The answer is, surprisingly, doing
              neither. Choose a small tech stack like HTML/CSS/JavaScript, and
              go moderately deep into all three. This has a couple of
              advantages:
            </p>
            <ul>
              <li>
                You won't get bored, as all three have relatively different
                purposes and you write them differently.
              </li>
              <li>
                You can blend all three and create and see something meaningful
                quickly without months of effort (which is usually required by
                other languages like C/C++). This will keep you motivated to
                keep going.
              </li>
            </ul>
            <h2>Do not choose React, or Angular, or Vue</h2>
            <p>
              When people start to work with JavaScript, there's an urge to pick
              up a library like React, a UI system like Material UI, and dive
              into building awesome stuff.
            </p>
            <p>
              Unfortunately, this leads to nothing more than shooting yourself
              in the foot. You can never, ever, create intermediate to advanced
              projects with these frameworks if you don't understand the basics
              of JavaScript. And applying JavaScript takes some time.
            </p>
            <p>
              Notice that I used the word applying, and not learning, in the
              previous sentence. There's a huge difference between learning
              something and applying something you've learned.
            </p>
            <p>
              Create a small but working project with HTML/CSS/JavaScript. And
              when you do, create one more, and then create another project.
            </p>
            <p>
              Every step along the way, keep increasing the complexity of the
              project and the expectations too until your codebase becomes
              unmanageable. At that point, you've arrived at what I like to call
              the boundary of superior learning.
            </p>
            <p>
              You see, frameworks exist to offload repetitive work from you.
              They do not exist so that you ignore what's really going on under
              the hood and rely on the fact that it's all magic.
            </p>
            <p>
              The first time you choose a framework like React or Angular for
              your projects should be when you're confident that you can create
              that project without React or Angular.
            </p>
          </div>
          <ChatBox />
        </div>
      </AuthLayout>
    </>
  );
};

export default index;
