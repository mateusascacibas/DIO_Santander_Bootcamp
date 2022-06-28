import java.util.ArrayList;
import java.util.List;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> listCliente = new ArrayList<String>();
		cliente mateus = new cliente();
		mateus.setNome("Mateus Ascacibas");
		cliente anna = new cliente();
		anna.setNome("Anna Ascacibas");
		cliente dayelle = new cliente();
		dayelle.setNome("Dayelle Antonia");
		listCliente.add(mateus.getNome());
		listCliente.add(anna.getNome());
		listCliente.add(dayelle.getNome());
		System.out.println("Lista de clientes: ");
		for (int i = 0; i < listCliente.size(); i++) {
			String nome = listCliente.get(i);
			System.out.println("Cliente nº " + (i+1) + ": "+ nome);
		}
		conta cc = new contaCorrente(mateus);
		conta poupConta = new contaPoupanca(dayelle);
		cc.depositar(300);
		cc.transferir(200,poupConta);
		cc.imprimirExtrato();
		poupConta.imprimirExtrato();
		
	}

}
