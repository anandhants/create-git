import React, { useEffect, useState } from "react";
import { Box, Burger, Divider, Flex, Group, Menu, Paper } from "@mantine/core";
import { HeaderMenu } from "../MantineUi/HeaderMenu";
// import {
//   headerMenus,
//   headerSelectData,
//   headerIcons,
//   headerSubMenu,
//   headerTitles,
// } from "../../Components/Settings/DataUtilis";
import {
  headerMenus,
  headerSelectData,
  headerIcons,
  headerSubMenu,
  headerTitles,
} from "../Settings/DataUtilis";
// import AvatharLogo from "../../assets/Images/avathar.jpg";
import AvatharLogo from "../assets/Images/avathar.jpg";
import { GroupedIcons } from "../MantineUi/GroupedIcons";
import { SubNavBar } from "./SubNavBar";
// import { useDisclosure } from "@mantine/hooks";
// import MobileNavBar from "./MobileNavBar";
import { IconTextArrow } from "../MantineUi/IconTextArrow";
import Logos from "../assets/Images/Logos.svg";
import { ToggleMenus } from "../MantineUi/ToggleMenu";
import { toggleMenusData } from "../Settings/DataUtilis";
import { Containerui } from "../MantineUi/ContainerUi";
import { GroupMenus } from "../MantineUi/GroupMenus";
import { AvatharImage } from "../MantineUi/AvatharImage";
// interface INavBarInterface {
//   headerMenus?: any
//   headerSelectData?: any
//   headerIcons?: any
//   headerSubMenu?: any
//   headerTitles?: any
// }
const NavBar = () => {
  // const { headerMenus,
  //   headerSelectData,
  //   headerIcons,
  //   headerSubMenu,
  //   headerTitles, } = props
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [openSubMenuId, setSubOpenMenuId] = useState<number | null>(null);
  const [openSubTitleMenu, setOpenSubTitleMenu] = useState<Boolean | null>(
    null
  );


  const handleHeaderClick = (id: number) => {
    setOpenMenuId((prevId) => (prevId === id ? id : id));
    setSubOpenMenuId(null);
  };

  const closeMenu = () => {
    setOpenMenuId(null);
    setSubOpenMenuId(null);
  };


  const headerSubMenuFilter = headerSubMenu?.filter(
    (el: any) => el.id === openMenuId
  );

  return (
    <Paper className="xl:px-24 px-4 py-4" shadow="md" variant="transparent">
      {/* <Container fluid > */}
      <Flex align="center" justify="space-between" className="w-full">
        <Flex>
          <Menu
            shadow="md"
            width={200}
            trigger="click-hover"
            openDelay={100}
            closeDelay={200}
          >
            <Menu.Target>
              <Flex align="center">
                <IconTextArrow
                  dropdownTitle="Daily Tasks"
                  headerSelectData={headerSelectData}
                  imageUrl={Logos}
                />
              </Flex>
            </Menu.Target>
            <Menu.Dropdown>
              <HeaderMenu headerMenu={headerTitles} />
            </Menu.Dropdown>
          </Menu>
        </Flex>
        {/* right side icons */}
        <Group visibleFrom="md" className="ml-4">
          <GroupedIcons
            IconName={headerIcons}
            variant="white"
            indicationShow={true}
          />
          <ToggleMenus
            ToogleMenusItem={toggleMenusData}
            position={"bottom-end"}
          >
            <AvatharImage
              AvathatarimageUrl={AvatharLogo}
              name="avathar"
              width={40}
              height={40}
              radius={"xl"}
              classNames={"cursor-pointer "}
            />
          </ToggleMenus>
        </Group>
    
      </Flex>
      <Box visibleFrom="md" className="xl:w-[67%] xl:!ml-[15.5rem] lg:w-[53%] lg:!ml-[15.5rem] md:w-6/12 mx-auto">
        <Containerui sizeContainer={"100%"} containerClass="mt-[-40px]">
          <GroupMenus
            headerMenusDatas={headerMenus}
            onClick={handleHeaderClick}
            state={openMenuId}
            textClassName={"!text-secondary-text !font-medium"}
          />
        </Containerui>
      </Box>
      {openMenuId !== null && (
        <div className="absolute w-full left-0 top-[4.5rem]">
          <Divider visibleFrom="md" />{" "}
          <SubNavBar
            Data={headerSubMenuFilter}
            handleCancel={closeMenu}
            setSubOpenMenuId={setSubOpenMenuId}
            openSubMenuId={openSubMenuId}
            openSubTitleMenu={openSubTitleMenu}
            setOpenSubTitleMenu={setOpenSubTitleMenu}
          />
        </div>
      )}
    </Paper>

  );
};
export default NavBar;