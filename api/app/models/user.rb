class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :recoverable, :rememberable, :validatable,
  # :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
    :jwt_authenticatable, jwt_revocation_strategy: Blacklist
end
