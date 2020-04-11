class Ingredient < ApplicationRecord

    belongs_to :user_recipe
    validates :name, :amount, :unit, presence: true
  
end
