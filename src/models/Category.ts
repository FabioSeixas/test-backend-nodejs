import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Product from './Product';

@Entity('categories')
class Category {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;
  
  @OneToMany(() => Product, product => product.category)
  products: Product[];

}

export default Category;

