class CreatePantryItems < ActiveRecord::Migration[6.0]
  def change
    create_table :pantry_items do |t|
      t.string :name
      t.float :quantity
      t.string :units
      t.string :storage_bin
      t.datetime :when_bought
      t.datetime :exp_date
      t.integer :min_item
      t.integer :max_item

      t.timestamps
    end
  end
end
