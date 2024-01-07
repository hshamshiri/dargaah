import { Breadcrumbs, Link, Typography } from "@mui/material";

const UiBreadcrumbs = ({ items }) => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {items.map((item, index) => {
          return (
            <Link
              key={index}
              underline="hover"
              color="text.primary"
              href={item.link}
            >
              {item.label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default UiBreadcrumbs;
