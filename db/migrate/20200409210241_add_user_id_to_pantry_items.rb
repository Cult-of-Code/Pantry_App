class AddUserIdToPantryItems < ActiveRecord::Migration[6.0]
  def change
    add_column :pantry_items, :user_id, :integer
  end
end
