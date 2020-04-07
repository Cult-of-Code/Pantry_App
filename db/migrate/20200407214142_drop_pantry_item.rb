class DropPantryItem < ActiveRecord::Migration[6.0]
  def change
    drop_table :pantry_items
  end
end
