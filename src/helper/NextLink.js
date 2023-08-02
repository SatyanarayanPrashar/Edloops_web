import { useRouter } from "next/router";
import Link from "next/link";

const NextLink = ({ href, activeClassName, children, ...rest }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href} {...rest}>
      <span className={isActive ? activeClassName : ""}>{children}</span>
    </Link>
  );
};

export default NextLink;
