package com.bancoDigital;

public class Main {

    public static void main(String[] args) {
        Cliente raphael = new Cliente();
        raphael.setNome("Raphael Oliveira");

        Conta contaCorrente = new ContaCorrente(raphael);
        Conta contaPoupanca = new ContaPoupanca(raphael);

        contaCorrente.depositar(100);
        contaCorrente.transferir(50, contaPoupanca);

        contaCorrente.imprimirExtrato();
        contaPoupanca.imprimirExtrato();
    }
}