public class Main {

    public static void main(String[] args) {
        Cliente venilton = new Cliente();
        venilton.setNome("Venilton");

        Conta contaCorrente = new ContaCorrente(venilton);
        Conta contaPoupanca = new ContaPoupanca(venilton);

        contaCorrente.depositar(100);
        contaCorrente.transferir(50, contaPoupanca);

        contaCorrente.imprimirExtrato();
        contaPoupanca.imprimirExtrato();
    }
}
