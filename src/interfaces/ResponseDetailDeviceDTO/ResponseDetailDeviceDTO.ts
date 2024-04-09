export interface ResponseDetailDeviceDTO {
  id_dispositivos: string;
  modelo: string;
  banco_dados: string;
  versoes: {
    eprave: [
      {
        versao: string;
        data_hora_verificacao: string;
      }
    ];
    ebiometrika: [
      {
        versao: string;
        data_hora_verificacao: string;
      }
    ];
    launcher_criar: [
      {
        versao: string;
        data_hora_verificacao: string;
      }
    ];
  };
  atualizacao: [
    {
      id_versao_atual: string
      id_versao_liberada: string
      data_hora_cadastro: string;
    }
  ];
}
