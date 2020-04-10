class PantryItem < ApplicationRecord
    belongs_to :user
    validates :name, :quantity, :units, presence: true
end
