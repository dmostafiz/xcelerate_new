import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";

const NavItem = (props) => {

    const router = useRouter()
    const color = useColorModeValue("gray.600", "gray.300");
    const { icon, children, submenu, route, routes = [], ...rest } = props;

    return (
        <Flex
            align="center"
            px="3"
            pl="3"
            py="3"
            cursor="pointer"
            color={(routes.includes(router.pathname) || (route == router.pathname))  ? 'white' : 'whiteAlpha.700'}
            borderBottom={submenu ? '0px' : '2px'}
            borderBottomColor='blackAlpha.50'
            borderLeft={'2px'}
            borderLeftColor={routes.includes(router.pathname) ? 'yellow.500' : 'blackAlpha.50'}
            _hover={{
                bgGradient: submenu ? 'none' : 'whiteAlpha.200',
                color: "white",
                borderLeftColor: 'yellow.500'
            }}
            role="group"
            fontWeight="semibold"
            // fontSize={submenu? '15px': '16px'}
            transition="0s ease"
        
            {...rest}
        >
            {icon && (
                <Icon
                    mx="2"
                    boxSize="4"
                    _groupHover={{
                        color: "white",
                    }}
                    as={icon}
                />
            )}

            {submenu && (
                <Icon
                    mx="1"
                    boxSize="4"
                    _groupHover={{
                        color: "white",
                    }}
                    as={BsArrowRight}
                />
            )}
            {children}
        </Flex>
    );
};

export default NavItem