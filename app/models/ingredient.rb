class Ingredient < ApplicationRecord

    belongs_to :user_recipe
    validates :name, :amount, presence: true
    validates :unit, presence: true, allow_blank: true
    
end
