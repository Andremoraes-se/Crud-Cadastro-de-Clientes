import React from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
} from "@chakra-ui/react";
import { useState } from "react";

const ModalComp =({data, setData, dataEdit, isOpen, onClose }) => {
    const [name, setName] = useState(dataEdit.name|| "");
    const [email, setEmail] = useState(dataEdit.email|| "");
    const [sexo, setSexo] = useState(dataEdit.sexo|| "");


    const handleSave = () => {  
        if (!name || !email || !sexo) return;

        if (emailAlreadyExists()) {
            return alert('E-mail ja Cadastrado!');
            
        }

        if (Object.keys(dataEdit).length) {
            data[dataEdit.index] = {name, email, sexo };
        }

        const newDataArray = !Object.keys(dataEdit).length
            ?[...(data ? data : []), {name, email, sexo}]
            :[...(data ? data :[])];

         localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));

         setData(newDataArray);

         onClose();
    };


    const emailAlreadyExists = () => {
        if (dataEdit.email !== email && data?.lenght) {
            return data.find((item) => item.email === email);
        }
            
        return false;
  };


    return (
    <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Cadastro de Clientes </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <FormControl display="flex" flexDir="column" gap={4}>
                        <Box>
                          <FormLabel>Nome</FormLabel>
                          <Input
                          tipe="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}/>
                        </Box>
                        <Box>
                          <FormLabel>E-mail</FormLabel>
                          <Input
                          tipe="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}/>
                        </Box>
                        <Box>
                          <FormLabel>Sexo</FormLabel>
                          <Input
                          tipe="text"
                          value={sexo}
                          onChange={(e) => setSexo(e.target.value)}/>
                        </Box>
                    </FormControl>
                </ModalBody>
                <ModalFooter justifyContent="start">
                    <Button colorScheme="green" mr={3} onClick={handleSave}>
                        SALVAR
                    </Button>
                    <Button colorScheme="red" onClick={onClose}>
                        CANCELAR
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  );
};

export default ModalComp;