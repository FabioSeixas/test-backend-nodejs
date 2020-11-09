import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Category from './Category'

@Entity('products')
class Product {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  title: string;
  
  @Column('varchar')
  description: string;
  
  @Column('decimal')
  price: number;

  @Column('uuid')
  category_id: string;

  @ManyToOne(() => Category, {eager: true})
  @JoinColumn({name: 'category_id'})
  category: Category;

}

export default Product;

