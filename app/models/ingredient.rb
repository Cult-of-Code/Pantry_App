class Ingredient < ApplicationRecord
    belongs_to :user_recipes
    validates :name, :amount, :unit, presence: true
end
