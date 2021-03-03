import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sais')
export default class Sai {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true }) rg: string;
  @Column({ nullable: true }) cargo: string;
  @Column({ nullable: true }) nome: string;
  @Column({ nullable: true }) rg_cadastro: string;
  @Column({ nullable: true }) data: Date;
  @Column({ nullable: true }) docorigem: string;
  @Column({ nullable: true }) cdopm: string;
  @Column({ nullable: true }) cdopm_fato: string;
  @Column({ nullable: true }) cdopm_controle: string;
  @Column({ nullable: true }) opm_abreviatura: string;
  @Column({ nullable: true }) sintese_txt: string; // text
  @Column({ nullable: true }) digitador: string;
  @Column({ nullable: true }) arquivopasta: string;
  @Column({ nullable: true }) bou_ano1: string;
  @Column({ nullable: true }) bou_numero1: string;
  @Column({ nullable: true }) id_municipio: number;
  @Column({ nullable: true }) bairro: string;
  @Column({ nullable: true }) logradouro: string;
  @Column({ nullable: true }) numerodoc: string;
  @Column({ nullable: true }) motivo_principal: string;
  @Column({ nullable: true }) motivo_secundario: string;
  @Column({ nullable: true }) desc_outros: string;
  @Column({ nullable: true }) id_andamento: number;
  @Column({ nullable: true }) id_andamentocoger: number;
  @Column({ nullable: true }) sjd_ref: number;
  @Column({ nullable: true }) abertura_data: Date;
  @Column({ nullable: true }) sjd_ref_ano: number;
  @Column({ nullable: true }) vtr1_placa: string;
  @Column({ nullable: true }) vtr1_prefixo: string;
  @Column({ nullable: true }) vtr2_placa: string;
  @Column({ nullable: true }) vtr2_prefixo: string;
  @Column({ nullable: true }) relatorio1: string;
  @Column({ nullable: true }) relatorio1_data: Date;
  @Column({ nullable: true }) relatorio1_file: string;
  @Column({ nullable: true }) relatorio2: string;
  @Column({ nullable: true }) relatorio2_data: Date;
  @Column({ nullable: true }) relatorio2_file: string;
  @Column({ nullable: true }) relatorio3: string;
  @Column({ nullable: true }) relatorio3_data: Date;
  @Column({ nullable: true }) relatorio3_file: string;
  @Column({ nullable: true }) bou_ano2: string;
  @Column({ nullable: true }) bou_ano3: string;
  @Column({ nullable: true }) bou_numero2: string;
  @Column({ nullable: true }) bou_numero3: string;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' }) deletedAt: Date;
}
