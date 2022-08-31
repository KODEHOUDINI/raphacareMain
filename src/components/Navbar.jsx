import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
  background-color: #fff;
  color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
// Left Section Styling
const Left = styled.div`
  padding: 10px 20px;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
`;

// Center Section Styling
const Center = styled.div`
  padding: 10px 20px;
  flex: 1;
  text-align: center;
`;
const Logo = styled.div`
  font-weight: bold;
`;

// Right Section Styling
const Right = styled.div`
  padding: 10px 20px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer style={{ color: "gray", fontSize: 16 }}>
            <Input />
            <Search></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>RAPHACARE</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
