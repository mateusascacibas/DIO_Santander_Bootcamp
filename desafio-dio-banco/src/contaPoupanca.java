
public class contaPoupanca extends conta{

	public contaPoupanca(cliente cliente) {
		super(cliente);

	}

	@Override
	public void imprimirExtrato() {
		// TODO Auto-generated method stub
		System.out.println("--- Extrato Conta Poupança ---");
		super.imprimirInfosComuns();
	}

}
