import { usePersonalization } from "@jsonstorage/personalize-react";

const config = {
  orgId: "5725bb31-8a05-4754-ba35-8f12024e78e4",
  itemId: "fa0f4907-6c9a-4ba4-82ac-3658ff5ed760",
};

export const Header = (props) => {
  const variant = usePersonalization(config);

  return (
    <header id="header">
      <div className={"intro " + variant.data.style}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {variant.data.title}
                  <span></span>
                </h1>
                <p>{variant.data.text}</p>
                <a
                  href="?persona=marketer"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Marketer
                </a>
                {"  "}
                <a
                  href="?persona=developer"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Developer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
