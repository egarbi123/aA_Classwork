class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable

  def initialize
    @head = Node.new()
    @tail = Node.new()
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    current_node = @head
    until current_node == @tail
      return current_node.val if current_node.key == key
      current_node = current_node.next
    end
    nil
  end

  def include?(key)
    current_node = @head
    until current_node == @tail
      return true if current_node.key == key
      current_node = current_node.next
    end
    false

  end

  def append(key, val)
    new_node = Node.new(key, val)
    prev = @tail.prev
    prev.next = new_node
    new_node.prev = prev
    new_node.next = @tail
    @tail.prev = new_node
  end

  def update(key, val)
    current_node = @head
    until current_node == @tail
      if current_node.key == key
        current_node.val = val
        break
      end
      current_node = current_node.next
    end

  end

  def remove(key)
    current_node = @head
    until current_node == @tail
      if current_node.key == key
        prev = current_node.prev
        next_n = current_node.next
        prev.next = next_n
        next_n.prev = prev
        break
      end
      current_node = current_node.next
    end
  end

  def each
    current_node = @head
    until current_node == @tail
      current_node = current_node.next
      current_node
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
