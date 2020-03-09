class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    value = 0
    self.each.with_index do |ele, i|
      value += ele.hash ^ i
    end
    value
  end
end

class String
  def hash
    value = 0
    chars = [*:A..:Z, *:a..:z, *0..9, ?$, ?_]
    self.each_char.with_index do |char, i|
      value += (chars.index(char) ^ i).hash
    end
    value
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
